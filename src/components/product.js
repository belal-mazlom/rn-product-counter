
import React, { Component } from 'react';
import { Platform, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../assets/style';

const counterFontSize = 24;

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, counterOpen: false };


    this.scaleValue = new Animated.Value(0);
    this.counterAnimation = new Animated.Value(0);
  }

  openCounterBox() {
    Animated.timing(
      this.counterAnimation,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }
    ).start(() => {
      this.setState({
        counterOpen: true
      });
    });
  }

  animateCounter() {
    this.scaleValue.setValue(0);

    Animated.sequence([
      Animated.timing(
        this.scaleValue,
        {
          toValue: -1,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.scaleValue,
        {
          toValue: 1,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.scaleValue,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear
        }
      )
    ]).start();
  }

  addCount() {
    if (this.state.counterOpen) {
      this.setState({
        count: this.state.count + 1
      }, () => {
        this.animateCounter();
      });
    } else {
      this.openCounterBox();
    }
  }

  decreaseCount() {
    if (this.state.count < 1) {
      return;
    }
    this.setState({
      count: this.state.count - 1
    }, () => {
      this.animateCounter();
    });
  }

  renderMinusButton() {
    const minusPostion = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-60, -20]
    });

    return (
      <Animated.View style={{
        position: 'relative',
        zIndex: 2,
        right: minusPostion,
      }}>
        <TouchableOpacity activeOpacity={1} style={styles.minusBtn} onPress={() => this.decreaseCount()}>
          <View>
            <Text style={[styles.textAlignCenter, styles.font28]}>-</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  renderPlusButton() {
    const plusScale = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1.5, 1]
    });

    const plusRotate = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });

    const plusPostion = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-40, -20]
    });

    return (
      <Animated.View style={{
        position: 'relative',
        zIndex: 3,
        left: plusPostion,
        transform: [
          { scaleX: plusScale},
          { scaleY: plusScale},
          {rotate: plusRotate}
        ]
      }}>
        <TouchableOpacity activeOpacity={1} style={[styles.plusBtn,]} onPress={() => this.addCount()}>
          <View>
            <Text style={[styles.whiteColor, styles.textAlignCenter, styles.font28]}>+</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  renderCounterLabel() {
    const scale = this.scaleValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [20, counterFontSize, 28]
    });

    const labelScale = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    });

    const labelPostion = this.counterAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 0]
    });

    return (
      <Animated.View style={[
        styles.countLabel,
        {
          position: 'relative',
          right: labelPostion,
          transform: [
            { scaleX: labelScale},
            { scaleY: labelScale},
          ]
        }]}>
        <Animated.Text style={[styles.countLabelText, { fontSize: scale }]} >
          {this.state.count}
        </Animated.Text>
      </Animated.View>
    );
  }

  renderCountBox() {
    return (
      <View style={styles.productCountBox}>
        {this.renderMinusButton()}
        {this.renderCounterLabel()}
        {this.renderPlusButton()}
      </View>
    );
  }

  render() {
    return (<View style={styles.productView}>
      <Text style={styles.productTitle}>{this.props.title}</Text>
      <Text style={styles.productSubtitle}>{this.props.subtitle}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{`$${this.props.price}`}</Text>
        {this.renderCountBox()}
      </View>
    </View>);
  }
};
