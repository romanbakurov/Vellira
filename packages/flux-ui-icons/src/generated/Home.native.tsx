import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

type IconProps = SvgProps & {
  size?: number | string;
  color?: string;
};
const Home = (props: IconProps) => (
  <Svg
    viewBox='0 0 20 20'
    fill={props.color ?? 'currentColor'}
    xmlns='http://www.w3.org/2000/svg'
    width={props.size ?? 16}
    height={props.size ?? 16}
    {...props}
  >
    <Path
      d='M13 16.0002H16V8.69224L10.877 3.00024H9.123L4 8.69224V16.0002H7V12.0002C7 10.3462 8.346 9.00024 10 9.00024C11.654 9.00024 13 10.3462 13 12.0002V16.0002ZM17 17.0002H12V12.0002C12 10.8972 11.103 10.0002 10 10.0002C8.897 10.0002 8 10.8972 8 12.0002V17.0002H3V8.30824L8.677 2.00024H11.323L17 8.30824V17.0002Z'
      fill='currentColor'
    />
  </Svg>
);
export default Home;
