import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/common/Header'
import CategoryListFood from './CategoryListFood'

const mockMenuCategory = [
  {
    _id: 1,
    name: 'Breakfast',
    image_url: require('../../images/mockMenu/breakfast.png')
  },
  {
    _id: 2,
    name: 'Ramen',
    image_url: require('../../images/mockMenu/ramen.png')
  },
  {
    _id: 3,
    name: 'Sandwiches',
    image_url: require('../../images/mockMenu/sandwich.png')
  },
  {
    _id: 4,
    name: 'Mediterr',
    image_url: require('../../images/mockMenu/media.png')
  },
  {
    _id: 5,
    name: 'Japanese',
    image_url: require('../../images/mockMenu/japan.png')
  },
  {
    _id: 6,
    name: 'Sushi',
    image_url: require('../../images/mockMenu/sushi.png')
  },
  {
    _id: 7,
    name: 'New Mexican',
    image_url: require('../../images/mockMenu/mexican.png')
  },
  {
    _id: 8,
    name: 'Bar Food',
    image_url: require('../../images/mockMenu/barfood.png')
  },
  {
    _id: 9,
    name: 'Italian',
    image_url: require('../../images/mockMenu/italian.png')
  },
  {
    _id: 10,
    name: 'Burgers',
    image_url: require('../../images/mockMenu/burger.png')
  },

]



export default function Menu({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header header='Menu' navigation={navigation} />
      </View>
      <View style={styles.menuContainer}>
        {mockMenuCategory.map((item, index) => {
          return (
            (index % 2 === 0
              ? (
                <View style={styles.rowItem}>
                  <TouchableOpacity>
                    <CategoryListFood foodDetail={mockMenuCategory[index]} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <CategoryListFood foodDetail={mockMenuCategory[index + 1]} />
                  </TouchableOpacity>
                </View>)
              : null)
          )
        })}
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1 / 10,
    flexDirection: 'row',

  },
  menuContainer: {
    flex: 9 / 10,
    marginHorizontal: 20,
    marginVertical: 10,

  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  }

})
