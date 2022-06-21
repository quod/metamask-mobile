import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { ViewStyle } from 'react-native';
import { IconName } from '../Icon';

/**
 * Enum for supported tab bar labels.
 */
export enum TabBarLabel {
  Wallet = 'Wallet',
  Browser = 'Browser',
  Activity = 'Activity',
}

export type IconByTabBarLabel = {
  [key in TabBarLabel]: IconName;
};

/**
 * TabBar component props.
 */
export type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

/**
 * TabBar component style sheet.
 */
export interface TabBarStyleSheet {
  base: ViewStyle;
}

/**
 * Style sheet input parameters.
 */
export interface TabBarStyleSheetVars {
  bottomInset: number;
}
