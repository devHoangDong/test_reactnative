import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { useDispatch, useSelector } from 'react-redux';
import userInfoApi from '../api/userInfoApi';
import globalStyles from '../assets/styles/stylesGlobal';
import styleUserInfo from '../assets/styles/styleUserInfo';
import Button from '../components/Button';
import Card from '../components/Card';
import LoadingArea from '../components/LoadingArea';
import { selectUser, setUser } from '../redux/slice/userSlice';

const UserInfo = () => {

  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();
  const userInfoArr = useSelector(selectUser)
  const fetchUser = async () => {
    try {
      const result = await userInfoApi.getUser({ size: 10 })
      if (result) {
        console.log('result: ', result);
        const actionUpload = setUser(result);
        dispatch(actionUpload);
      }
    } catch (err) {
      console.log('err: ', err);
    }
  }
  const renderCard = (item, index) => {
    return (
      <View key={index}>
        <Card userData={item} />
      </View>
    )
  }
  useEffect(() => {
    trackPromise(fetchUser())
  }, [])

  if (promiseInProgress) return (
    <LoadingArea />
  )
  return (
    <SafeAreaView style={{ ...globalStyles.container, paddingHorizontal: theme.SIZES.BASE }}>
      <View style={styleUserInfo.buttonContainer}>
        <Button onPress={() => trackPromise(fetchUser())} color="error" style={styleUserInfo.button} label="Fetch Random" type="outline" />
      </View>
      <View style={styleUserInfo.cardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          flex={1}
        >
          {userInfoArr && userInfoArr.map(
            (item, index) => renderCard(item)
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default UserInfo;