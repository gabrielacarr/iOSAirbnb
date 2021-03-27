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

      {/* Old and New price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$152</Text>
        <Text style={styles.newPrice}> $144 / night</Text>
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$176 total</Text>
    </View>
  );
};

export default Post;
