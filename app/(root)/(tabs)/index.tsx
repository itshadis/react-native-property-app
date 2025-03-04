import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";
import images from "@/constants/images";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList 
        data={[1,2,3,4]}
        renderItem={(item) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    Hadis
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
    
            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex flex-row gap-5 mt-5">
                <FlatList 
                  horizontal
                  data={[1,2,3]}
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={(item) => <FeaturedCard />}
                  keyExtractor={(item) => item.toString()}
                  contentContainerClassName="flex gap-5 mt-5"
                />
              </View>

              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
                
                {/* <Filters /> */}
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
