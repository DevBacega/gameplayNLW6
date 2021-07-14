import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const GuildIcon: React.FC = () => {
  const uri =
    'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export default GuildIcon;
