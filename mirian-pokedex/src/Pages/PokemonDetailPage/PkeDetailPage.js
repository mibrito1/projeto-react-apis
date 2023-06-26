import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, Grid, Box, Image, Progress, Text, Heading } from "@chakra-ui/react"
import pokebolaGrande from "../../Assets/imagens/pokeballBackGroundDetail.png"
import pokebolaPequena from "../../Assets/imagens/pokeballDetailInsideBackground.svg"
import { SwitchTag } from '../../Components/SwitchTag/SwitchTag'


export default function PkeDetailPage() {

    const location = useLocation()

    const namePokemon = location.pathname.split('/')
    const name = namePokemon[namePokemon.length - 1]
    const [loading, setLoading] = useState(true)

    const [pokemonData, setPokemonData] = useState({})
    const getPokemon = async () => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await result.json()
        setPokemonData(data)
        setLoading(false)
    }

    useEffect(() => {
        getPokemon()
    }, [])
    console.log(pokemonData)

    let contaMovimentos = 0

    if (loading) {
        return <p> carregando </p>
    }

    return (




        <Box position={"relative"}>
            <Text
                fontSize={"3rem"}
                fontFamily={"Poppins"}
                position={"absolute"}
                top={"3rem"}
                left={"2.5rem"}
                color={"white"}
                fontWeight={700}
            >
                Detalhes
            </Text>

            <Image
                position={"absolute"}
                w={"56.812rem"}
                h={"56.812rem"}
                top={"-3.125rem"}
                left={"50%"}
                transform={"translate(-50%)"}
                src={pokebolaGrande}
                alt=""
            />

            <Box
                position={"absolute"}
                w={"86.821rem"}
                h={"41.438rem"}
                left={"50%"}
                top={"11.75rem"}
                transform={"translate(-50%)"}
                bgColor={"#5ec8b7"}
                borderRadius={"2.368rem"}
            >
                <Image
                    position={"absolute"}
                    top={0}
                    right={0}
                    h={"41.438rem"}
                    src={pokebolaPequena}
                    alt=""
                />

                <Image
                    src={pokemonData.sprites.other["official-artwork"].front_default}
                    alt=""
                    zIndex={1}
                    position={"absolute"}
                    top={"-8.25rem"}
                    left={"67.75rem"}
                    h={"16.875rem"}
                    w={"16.875rem"}
                />
                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"17.625rem"}
                    h={"17.625rem"}
                    left={"2.75rem"}
                    top={"1.625rem"}
                    borderRadius={"0.5rem"}
                    border={"0.125rem solid white"}
                >
                    <Image
                        src={pokemonData.sprites.front_default}
                        boxSize="250px"
                        objectFit="cover"
                    />
                </Box>

                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"17.625rem"}
                    h={"17.625rem"}
                    left={"2.75rem"}
                    top={"22.188rem"}
                    borderRadius={"0.5rem"}
                    border={"0.125rem solid white"}
                >
                    <Image
                        src={pokemonData.sprites.back_default}
                        boxSize="250px"
                        objectFit="cover"
                    />
                </Box>

                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"21.438rem"}
                    h={"38.313rem"}
                    left={"22.5rem"}
                    top={"1.5rem"}
                    borderRadius={"0.75rem"}
                >
                    <Heading>base stats</Heading>
                    <Flex
                        direction={"column"}
                        justify={"center"}
                        align={"center"}
                        w={"95%"}
                        m={"10px"}
                    >
                        {pokemonData.stats.map((stat) => {
                            return (
                                <Grid
                                    gap={10}
                                    m={"10px"}
                                    mt={"20px"}
                                    w={"100%"}
                                    h={"30px"}
                                    gridTemplateColumns={"2fr 20px 7fr"}
                                >
                                    <Text fontSize={"3rm"}> {stat.stat.name} </Text>
                                    <Text> {stat.base_stat} </Text>
                                    <Box w={"80%"}>
                                        <Progress colorScheme={"orange"} value={stat.base_stat} />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Flex>
                </Box>

                <Box
                    position={"absolute"}
                    bgColor={"white"}
                    w={"18.25rem"}
                    h={"28.313rem"}
                    left={"48.188rem"}
                    top={"11.5rem"}
                    borderRadius={"0.5rem"}
                >
                    <p>moves</p>
                    <Flex direction={"column"} gap={"5px"} margin={"10px"}>
                        {pokemonData.moves.map((move) => {
                            if (contaMovimentos < 6) {
                                contaMovimentos++;
                                return (
                                    <Box
                                        h={"35px"}
                                        bg={"#ECECEC"}
                                        borderRadius={"10px"}
                                        border={"1px dashed "}
                                        borderWidth={"1px"}
                                    >
                                        {" "}
                                        <Text ml={"10px"}> {move.move.name} </Text>
                                    </Box>
                                );
                            }
                        })}
                    </Flex>
                </Box>

                <Text
                    fontSize={"1rem"}
                    fontFamily={"Inter"}
                    position={"absolute"}
                    top={"1.5rem"}
                    left={"48.375rem"}
                    color={"white"}
                >
                    #{pokemonData.id < 10 ? `0${pokemonData.id}` : pokemonData.id}
                </Text>

                <Text
                    fontSize={"3rem"}
                    fontFamily={"Inter"}
                    position={"absolute"}
                    top={"2.438rem"}
                    left={"48.188rem"}
                    color={"white"}
                >
                    {pokemonData.name}
                </Text>
                <Flex position={"absolute"} top={"6.625rem"} left={"48.375rem"}>
                    {pokemonData.types.map((item) => (
                        <SwitchTag
                            type={item.type.name}
                            position={"absolute"}
                            top={"40.625rem"}
                            left={"48.375rem"}
                        />
                    ))}
                </Flex>

                {/* <Image
                    position={"absolute"}
                    w={"5.688rem"}
                    h={"1.938rem"}
                    top={"6.625rem"}
                    left={"48.375rem"}
                    gap={"1.063rem"}
                    src={""}
                    alt=""
                />

                <Image
                    position={"absolute"}
                    w={"6.188rem"}
                    h={"1.938rem"}
                    top={"6.625rem"}
                    left={"55.188rem"}
                    gap={"1.063rem"}
                    src={""}
                    alt=""
                /> */}
            </Box>
        </Box>
    )
}
