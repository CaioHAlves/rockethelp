import { useState } from 'react'
import { VStack, Heading, Icon, useTheme } from 'native-base'
import Logo from '../assets/logo_primary.svg'
import { Envelope, Key } from 'phosphor-react-native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Signin() {

  const { colors } = useTheme()

  const [userProfile, setUserProfile] = useState({name: '', password: ''})

  function handleSingIn() {
    console.log(userProfile)
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo/>
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input 
        placeholder='E-mail' 
        mb={4} 
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
        onChangeText={(text) => setUserProfile({...userProfile, name: text})}
      />
      <Input 
        placeholder="Senha" 
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>} secureTextEntry={true} 
        mb={10}
        onChangeText={(text) => setUserProfile({...userProfile, password: text})}
      />
      <Button title="Entrar" w="full" onPress={handleSingIn}/>
    </VStack>
  )
}