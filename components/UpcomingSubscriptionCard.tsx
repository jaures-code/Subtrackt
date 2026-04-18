import { formatCurrency } from '@/lib/utils';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface SubscriptionData {
  name: string;
  price: number;
  daysLeft: number;
  icon: string;
  currency: string;
}

const UpcomingSubscriptionCard = ({data}: {data: SubscriptionData}) => {
  return (
    <View className='upcoming-card'>
    <View className='upcoming-row items-center'>
      <Image source={data.icon} className='upcoming-icon'/>
      <View>
        <Text className='upcoming-price ml-2'>
          {formatCurrency(data.price, data.currency)}
        </Text>
        <Text className='upcoming-meta' numberOfLines={1}>
  {data.daysLeft > 1 ? `${data.daysLeft} days left` : "Last day"}
</Text>
      </View>
    </View>
    <Text className='upcoming-name' numberOfLines={1}>
      {data.name}
    </Text>
  </View>
  )
}

export default UpcomingSubscriptionCard