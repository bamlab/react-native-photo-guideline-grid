# react-native-photo-guideline-grid

A simple component to display a guideline grid according to Rule of thirds

## Usage

```
npm install react-native-photo-guideline-grid --save
```

then use it in a component:

```
import PhotoGuidelineGrid from 'react-native-photo-guideline-grid';

class MyView extends Component {
  //...

  render() {
    return (
      // ...
      <View style={{flex: 1}}>
        <Image {...} />
        <PhotoGuidelineGrid />
      </View>
    );
  }
```
