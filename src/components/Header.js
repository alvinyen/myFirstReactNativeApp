import React from 'react';
import { Text } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
  },
};

const Header = (props) => {
  const { headerText } = props;
  const textStyle = styles;
  return (
    <Text style={textStyle}>{headerText}</Text>
  );
};

Header.propTypes = {
  headerText: React.PropTypes.string,
};

Header.defaultProps = {
  headerText: 'no value get from props',
};

export default Header;
