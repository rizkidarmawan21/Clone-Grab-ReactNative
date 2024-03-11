import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { BannerPromo, COLORS, Categories, FONTS, IconArrowRight, IconHandShake, IconPoint, IconScan, IconSearch, IconStar, LogoOvo, RecomendationResto } from './assets';

type ItemCategoryProps = { title: string, icon: any };
type ItemBannerPromoProps = { title: string, name: string, sponsor: string, image: any };
type ItemRecomendationRestoProps = { title: string, distance: string, rating: string, promo: string, image: any };

const ItemCategory = ({ title, icon }: ItemCategoryProps) => (
  <View style={{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 24,
  }}>
    <Image source={icon} style={{ width: 60, height: 60 }} />
    <Text style={{
      fontFamily: FONTS.medium,
      fontSize: 15,
      color: COLORS.black,
      marginTop: 5
    }}>{title}</Text>
  </View>
);

const ItemBannerPromo = ({ title, name, sponsor, image }: ItemBannerPromoProps) => (
  <View style={{
    flexDirection: 'column',
    marginTop: 20,
    marginRight: 10,
  }}>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }}>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        marginBottom: 10
      }}>
        {title}
      </Text>
      <View style={{
        marginLeft: 10,
        backgroundColor: '#F9F9F9',
        borderRadius: 50,
        padding: 5,
      }}>
        <IconArrowRight width={10} height={10} />
      </View>
    </View>
    <Image source={image} style={{ width: 300, height: 150 }} />
    <Text style={{
      fontFamily: FONTS.medium,
      fontSize: 12,
      color: COLORS.black,
      marginTop: 10,
      width: 300,
      flexWrap: 'wrap'
    }}>
      {name}
    </Text>
    <Text style={{
      fontFamily: FONTS.regular,
      fontSize: 12,
      color: COLORS.grey,
      width: 300,
      flexWrap: 'wrap'
    }}>
      {sponsor}
    </Text>
  </View>
);

const ItemRecomendationResto = ({ title, distance, rating, promo, image }: ItemRecomendationRestoProps) => {
  return (
    <View style={{ marginRight: 10 }}>
      <Image source={image} style={{ width: 150, height: 120, borderRadius: 5 }} />
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        color: COLORS.black,
        marginTop: 10,
        width: 150,
        flexWrap: 'wrap'
      }}>
        {title}
      </Text>
      <View style={{
        flexDirection: 'row',
        marginTop: 5,
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: 12,
          color: '#3D3D3D',
          marginRight: 10
        }}>
          {distance}
        </Text>
        <IconStar width={15} height={15} />
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: 12,
          color: '#3D3D3D',
          marginLeft: 3
        }}>
          {rating}
        </Text>
      </View>
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: 11,
        borderRadius: 5,
        color: COLORS.black,
        backgroundColor: COLORS.warning,
        padding: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
      }}>
        {promo}
      </Text>
    </View>
  )
}

function App(): JSX.Element {

  const renderSearch = () => {
    const [search, setSearch] = useState('');
    return (
      <View>
        <View style={{
          backgroundColor: COLORS.main,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 30
        }} >
        </View>

        <View style={{
          backgroundColor: 'white',
          marginTop: -20,
          marginHorizontal: 20,
          borderRadius: 10,
          shadowOffset: { width: 1, height: 5 },
          elevation: 20,
          shadowColor: '#625F5F',
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: 10
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderEndWidth: 1,
              borderEndColor: COLORS.grey,
            }}>
              <IconSearch style={{ marginLeft: 20 }} width={25} height={25} />
              <TextInput
                placeholder="Cari di aplikasi Grab"
                onChangeText={setSearch}
                value={search}
                style={{
                  width: '65%',
                  height: 45,
                  margin: 12,
                  paddingVertical: 10,
                  marginLeft: 10,
                  fontSize: 17,
                  fontFamily: FONTS.regular,
                  color: COLORS.grey
                }}
              />
            </View>
            <IconScan style={{ marginRight: 20 }} width={25} height={25} />
          </View>
        </View>
      </View>
    )
  }

  const renderCategory = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>

        <FlatList
          data={Categories}
          horizontal
          style={{ marginTop: 15 }}
          renderItem={({ item }) => <ItemCategory title={item.title} icon={item.image} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }

  const renderWalletInfo = () => {
    return (
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, marginTop: 10 }} showsHorizontalScrollIndicator={false}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          marginTop: 20,
          backgroundColor: '#F9F9F9',
          width: 120,
          height: 60,
          padding: 10,
          borderRadius: 10,
          marginRight: 10
        }}>
          <View>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: 13,
              color: COLORS.black,
            }}>
              Aktifkan
            </Text>
            <Text style={{
              fontFamily: FONTS.regular,
              fontSize: 14,
              color: COLORS.black,
            }}>
              Ovo
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Image source={LogoOvo} style={{ width: 25, height: 25 }} />
          </View>
        </View>
        <View style={{
          marginTop: 20,
          backgroundColor: '#F9F9F9',
          width: 180,
          height: 80,
          padding: 10,
          borderRadius: 10,
          marginRight: 10
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View>
              <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: 13,
                color: COLORS.black,
              }}>
                Undang Teman
              </Text>
              <Text style={{
                fontFamily: FONTS.regular,
                fontSize: 14,
                color: COLORS.black,
                marginTop: 5
              }}>
                Dapatkan Hadiah
              </Text>
            </View>
            {/* <IconHandShake width={25} height={25} /> */}
            <View style={{ justifyContent: 'flex-end' }}>
              <IconHandShake width={25} height={25} />
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          marginTop: 20,
          backgroundColor: '#F9F9F9',
          width: 120,
          height: 60,
          padding: 10,
          borderRadius: 10,
          marginRight: 10
        }}>
          <View>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: 13,
              color: COLORS.black,
            }}>
              Point
            </Text>
            <Text style={{
              fontFamily: FONTS.regular,
              fontSize: 13,
              color: COLORS.black,
            }}>
              1.000
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <IconPoint width={25} height={25} />
          </View>
        </View>
      </ScrollView>
    )
  }

  const renderBannerPromo = () => {
    return (
      <FlatList
        data={BannerPromo}
        horizontal
        renderItem={({ item }) => <ItemBannerPromo title={item.title} name={item.name} sponsor={item.sponsor} image={item.image} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    )
  }

  const renderRecomendationResto = () => {
    return (
      <View style={{
        marginTop: 20,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 10
        }}>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: 16,
            color: COLORS.black,
          }}>
            Rekomendasi restoran untukmu
          </Text>
          <View style={{
            marginLeft: 10,
            backgroundColor: '#F9F9F9',
            borderRadius: 50,
            padding: 5,
          }}>
            <IconArrowRight width={10} height={10} />
          </View>
        </View >
        <FlatList
          data={RecomendationResto}
          horizontal
          renderItem={({ item }) => <ItemRecomendationResto title={item.title} distance={item.distance} rating={item.rating} promo={item.promo} image={item.image} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={COLORS.main}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSearch()}

        <View style={{
          marginLeft: 20
        }}>
          {renderCategory()}
          {renderWalletInfo()}
          {renderBannerPromo()}
          {renderRecomendationResto()}
        </View>
        <View style={{ height:100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;