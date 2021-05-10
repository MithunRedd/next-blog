import React, { useState, useEffect } from 'react';
import { useColorModeValue, Flex } from "@chakra-ui/react";
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random");
            arrayOfQuotes = data.data
        } catch (e) {
            console.log(e);
        }

        try {
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        quoteAPI();
    }, []);
    return (
        <Flex
            textAlign="center"
            flexDirection="column"
            maxWidth="700px"
            noOfLines={8}
            color={useColorModeValue("black.500", "white")}
            alignItems="flex-start"
            m="0 auto 4rem auto"
            maxWidth="700px"
            px={2}
        >
            {quote}
            <br />
            [{author}]
        </Flex>
    )
}

export default Quote;
