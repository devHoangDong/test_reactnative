import { StyleSheet } from 'react-native';
import { scaledSize } from './scaledSize';
import theme from './theme';


const styleAccount = StyleSheet.create({
  emailInput: {
    marginTop: scaledSize(30),
    marginBottom: scaledSize(15)
  },
  textCoundown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 25
  },
  textTime: {
    fontFamily: theme.FONT,
    fontSize: scaledSize(14),
    fontWeight: "700",
    lineHeight: scaledSize(theme.FONT_LINE_HEIGHT),
    color: '#E23F3F',
    textAlign: 'center'
  },
  digitTime: {
    backgroundColor: '#FFF',
    width: 20
  },
  textGuide: {
    marginTop: scaledSize(30),
    marginBottom: scaledSize(20),
    width: '100%'
  },
  buttonLogin: {
    marginTop: scaledSize(30),
    width: '100%'
  },
  tbuttonLogin: {
    backgroundColor: '#F46E77',
    height: scaledSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  noteText: {
    fontFamily: theme.FONT,
    color: "#00091C",
    fontWeight: '400',
    marginBottom: scaledSize(12),
    fontSize: scaledSize(13)
  },
  noteTextOTP: {
    marginTop: scaledSize(20),
    marginBottom: scaledSize(25)
  },
  inputOTPContainer: {
    height: scaledSize(35),
    width: "100%",
  },
  otpText: {
    fontFamily: theme.FONT,
    color: "#A26923",
    fontWeight: '700',
    marginBottom: scaledSize(20),
    marginTop: scaledSize(25),
    fontSize: scaledSize(16)
  },
  placeholderStyle: {
    color: "#00091C",
    fontWeight: "500",
    fontFamily: theme.FONT,
    fontSize: 16
  },
  listParentLabelStyle: {
    color: "#A5A5A5",
    fontWeight: "500",
    fontFamily: theme.FONT,
    fontSize: 16,
    paddingLeft: 10
  },
  listItemLabelStyle: {
    color: "#000"
  },
  dropDownContainer: {
    backgroundColor: "#fff",
    borderColor: '#E0E0E0',
  },
  dropdownStyle: {
    borderColor: '#E0E0E0',
    minHeight: 44,
    paddingVertical: 3,
    paddingLeft: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: scaledSize(200),
    height: null,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
  },
  tview: {
    marginTop: scaledSize(0),
    marginBottom: scaledSize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLoginBtn: {
    fontFamily: theme.FONT,
    color: theme.COLORS.white,
    fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
    fontSize: scaledSize(theme.FONT_SIZE_LARGE)
  },
  tbuttonLogin: {
    backgroundColor: '#F46E77',
    height: scaledSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  card: {
    backgroundColor: theme.COLORS.white,
    borderWidth: 0,
    display: 'flex',
    width: "90%",
    marginTop: scaledSize(20),
    shadowColor: theme.COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.HORIZONTAL_PADDING,
    borderRadius: 5
  },
  avatarBlock: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: scaledSize(20),
    color: '#000',
    textAlign: 'center'
  },
  changePass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaledSize(20)
  },
  changePassText: {
    color: theme.COLORS.black,
    fontSize: scaledSize(16),
    textAlign: 'center'
  },
  menuicon: {
    paddingRight: scaledSize(10)
  }
});

export default styleAccount;
