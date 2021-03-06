/**
 * ✔ type
 * ✔ size
 * ✔ color
 *
 * @example <Icon type='success' color='green' />
 *
 * @flow
 */

import * as React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import * as WEUI from '../../assets/weui'

const iconTypeMap: Object = {
  'success': 'SUCCESS',
  'success_no_circle': 'SUCCESS_NO_CIRCLE',
  'info': 'INFO',
  'warn': 'WARN',
  'waiting': 'WAITING',
  'cancel': 'CANCEL',
  'download': 'DOWNLOAD',
  'search': 'SEARCH',
  'clear': 'CLEAR',
}

type Props = {
  style?: StyleSheet.Styles,
  type: 'success' | 'success_no_circle' | 'info' | 'warn' | 'waiting' | 'cancel' | 'download' | 'search' | 'clear',
  size?: number,
  color?: string,
}

module.exports = function _Icon ({
  style,
  type,
  size = 23,
  color = 'black',
}: Props) {
  const iconObj = WEUI[iconTypeMap[type]]

  if (!iconObj) {
    return (
      <View style={[style, { width: size, height: size }]} />
    )
  }

  const imageAsset = iconObj.image

  return (
    <View style={[style, { width: size, height: size }]}>
      <Image
        source={imageAsset}
        style={{
          width: size,
          height: size
        }}
      />
    </View>
  )
}
