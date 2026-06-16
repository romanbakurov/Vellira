import { useState } from 'react';

import { Pressable, Text, View } from 'react-native';

import { styles } from './Tooltip.styles';
import type { TooltipProps } from './types';

export function Tooltip({
  children,
  content,
  disabled,
  maxWidth = 240,
  style,
  bubbleStyle,
  textStyle,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.root, style]}>
      {visible && !disabled && (
        <View style={[styles.bubble, { maxWidth }, bubbleStyle]}>
          {typeof content === 'string' ? (
            <Text style={[styles.text, textStyle]}>{content}</Text>
          ) : (
            content
          )}
        </View>
      )}
      <Pressable
        onPressIn={() => setVisible(true)}
        onPressOut={() => setVisible(false)}
        onLongPress={() => setVisible(true)}
      >
        {children}
      </Pressable>
    </View>
  );
}
