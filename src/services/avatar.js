import * as React from 'react';

const avatarsAvailables = [
  require('../assets/avatars/avatar6.png'),
  require('../assets/avatars/avatar5.png'),
  require('../assets/avatars/avatar4.png'),
  require('../assets/avatars/avatar3.png'),
  require('../assets/avatars/avatar2.png'),
  require('../assets/avatars/avatar1.png'),
];

export const useAvatar = () => {
  const [avatars, setAvatars] = React.useState([]);

  React.useEffect(() => {
    setAvatars(avatarsAvailables);
  }, []);

  return { avatars };
};
