import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CategoryRenderItem from '../../components/Home/CategoryRenderItem';
import ListRenderItem from '../../components/Home/ListRenderItem';
import ScrollRenderItem from '../../components/Home/ScrollRenderItem';


const mockDataSlideShow = [
  {
    _id: 1,
    category: 'Breakfast',
    image_url: require('../../images/mockCategories/breakfast.png')
  },
  {
    _id: 2,
    category: 'Ramen',
    image_url: require('../../images/mockCategories/ramen.png')
  },
  {
    _id: 3,
    category: 'Sandwiches',
    image_url: require('../../images/mockCategories/sandwich.png')
  },
  {
    _id: 4,
    category: 'Pizza',
    image_url: require('../../images/mockCategories/breakfast.png')
  },
  {
    _id: 5,
    category: 'Ramen',
    image_url: require('../../images/mockCategories/ramen.png')
  },
  {
    _id: 6,
    category: 'Sandwiches',
    image_url: require('../../images/mockCategories/sandwich.png')
  },
  {
    _id: 7,
    category: 'Ramen',
    image_url: require('../../images/mockCategories/ramen.png')
  },
  {
    _id: 8,
    category: 'Sandwiches',
    image_url: require('../../images/mockCategories/sandwich.png')
  },
  {
    _id: 9,
    category: 'Ramen',
    image_url: require('../../images/mockCategories/ramen.png')
  },
  {
    _id: 10,
    category: 'Sandwiches',
    image_url: require('../../images/mockCategories/sandwich.png')
  },
]



const mockDataList = [
  {
    _id: 1,
    name: 'Ramen',
    image_url: require('../../images/mockList/ramen.png')
  },
  {
    _id: 2,
    name: 'Beefsteak',
    image_url: require('../../images/mockList/red.png')
  },
  {
    _id: 3,
    name: 'Sandwich',
    image_url: require('../../images/mockList/egg.png')
  },
  {
    _id: 4,
    name: 'Sallad',
    image_url: require('../../images/mockList/sald.png')
  },
  {
    _id: 5,
    name: 'The fancy sandwich',
    image_url: require('../../images/mockList/fancy.png')
  }
]

const mockDataScroll = [
  {
    _id: 1,
    name: 'Forbidden Salad',
    image_url: require('../../images/mockList/sald.png'),
    price : 11.05
  },
  {
    _id: 2,
    name: 'RedFlag',
    image_url: require('../../images/mockList/red.png'),
    price : 14.25,
  },
  {
    _id: 3,
    name: 'Pretty Cash Sandwich',
    image_url: require('../../images/mockList/egg.png'),
    price: 16.50
  },
  {
    _id: 4,
    name: 'The Fancy Sandwich',
    image_url: require('../../images/mockList/fancy.png'),
    price:18.50
  },
  
]




export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => { }}>
            <FeatherIcon name='menu' size={30} color='#4A4A4A' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FeatherIcon name='shopping-cart' size={30} color='#4A4A4A' />
          </TouchableOpacity>
        </View>
        <View style={styles.slideShowContainer}>
          <Text style={{ fontFamily: 'Helvetica', fontSize: 18, fontWeight: '600', top: -40 }}>Popular Categories</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: -20 }}
            horizontal
            data={mockDataSlideShow}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <CategoryRenderItem item={item} />
              )
            }}
          />
        </View>
        <View style={styles.carouselContainer}>
          <Text style={{
            fontFamily: 'Helvetica', fontSize: 18, fontWeight: '600', top: -40, marginHorizontal: 20,
            marginVertical: 10,
          }}>Best Deals</Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: -20 }}
            horizontal
            data={mockDataList}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <ListRenderItem item={item} />
              )
            }}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={{
            fontFamily: 'Helvetica', fontSize: 18, fontWeight: '600', marginHorizontal: 20,
            marginTop:-20,
          }}>Most popular</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}          
            data={mockDataScroll}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <ScrollRenderItem item={item} />
              )
            }}
          />
        </View>
      </ScrollView>

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
  slideShowContainer: {
    flex: 2 / 10,
    marginHorizontal: 20,
    marginVertical: 40,

  },
  carouselContainer: {
    flex: 4 / 10,
    marginTop: 20,

  },
  listContainer: {
    flex: 3 / 10,
    marginTop: 40,

  }
})
