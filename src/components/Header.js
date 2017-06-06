import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  const { headerText } = props;
  return (
    <Text>{headerText}</Text>
  );
};

Header.propTypes = {
  headerText: React.PropTypes.string,
};

Header.defaultProps = {
  headerText: 'no value get from props',
};

export default Header;
