import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image   */}
      <Image
        style={styles.image}
        source={{
          uri:
            'https://a0.muscache.com/im/pictures/miso/Hosting-36908284/original/30fb92c2-e4df-479d-912a-c63de33415e0.jpeg?im_w=480',
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.guest} guests · {post.bedroom} bedroom · {post.bath} bath
      </Text>

      {/* Type description */}
      <Text style={styles.description}>
        An entire property, light-filled, cozy tiny home all to yourselves with
        separate parking on our beautiful 10 acre property, Dummy text for
        applications.
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
