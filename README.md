# react-native-photo-guideline-grid

A simple component to display a guideline grid according to Rule of thirds.

![Screenshot of the guideline grid](https://raw.githubusercontent.com/bamlab/react-native-photo-guideline-grid/master/doc/screenshot.png "Screenshot of the guideline grid")

## Usage

```shell
npm install react-native-photo-guideline-grid --save
```

then use it in a component:

```js
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
