import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image   */}
      <Image style={styles.image} source={{uri: post.image}} />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.guest} guests · {post.bedroom} bedroom · {post.bath} bath
      </Text>

      {/* Type: Property Type */}
      <Text style={styles.type} numberOfLines={2}>
        {post.type}
      </Text>

      {/* Type description: Title */}
      <Text style={styles.type} numberOfLines={2}>
        {post.title}
      </Text>

      {/* Type description */}
      <Text style={styles.description} numberOfLines={10}>
        {post.description}
      </Text>

      {/* Old and New price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
