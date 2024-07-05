import {AppRegistry} from 'react-native';
import MyComponent from './App';
import MyApp from './mainScreen';
import {name as appName} from './app.json';
import getImage from './Components/StyleSheet';
import activityIndicator from './Components/ActivityIndicator';
import StudyButton from './Components/Button';
import flatlist from './Components/FlatList';
import keyboardavoidingview from './Components/KeyboardAvoidingView';
import modal from './Components/Modal';
import pressable from './Components/Pressable';
import state from './Components/useState';
import refreshcontrol from './Components/RefreshControl';
import scrollview from './Components/scrollview';
import selectionlist from './Components/selectionList';
import statusbar from './Components/StatusBar';
import switchh from './Components/Switch';
import studyText from './Components/Text';
import backhandler from './Components/BackHandler';
import anim from './Animation/animation';
import animSongSong from './Animation_SongSong/animationSongSong';
import validation_Data from './Validation/validation';
import TableComponent from './Components/Table';
import DateTimePicker11 from './Components/DateTimePicker';
var SinhVien = [
  {
    hoten: 'Vu Hoai Ngoc',
    tuoi: 22,
  },
  {
    hoten: 'Le Thi Mai',
    tuoi: 20,
  },
  {
    hoten: 'Dinh Tuan Hai',
    tuoi: 23,
  },
];

// AppRegistry.registerComponent(appName, () => () => (
//   <MyComponent
//     x={1}
//     person={{
//       name: 'Vu Hoai Ngoc',
//       age: 22,
//       address: 'Hai Duong',
//     }}
//     sinhviens={SinhVien}
//   />
// ));

AppRegistry.registerComponent(appName, () => DateTimePicker11);
