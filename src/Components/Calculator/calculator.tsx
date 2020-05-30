import React, { useState } from 'react';
import { NumberCard, DevelopmentDiv, Main, Result } from './calculator_styles';

function FibonacciCalculator() {
    const [FibonacciArr, setFibArr] = useState<number[]>();
    const [FeedBackStr, setFeedBackStr] = useState<string>();

    const FibCalc = (e: React.ChangeEvent<HTMLInputElement>) => {
        let fibonacciSeq: number[];
        let whichNumberIs: string;

        let n: number = Number(e.target.value);

        switch (n) {
            case 0:
                fibonacciSeq = [0];
                break;
            case 1:
                fibonacciSeq = [0, 1];
                break;
            case 2:
                fibonacciSeq = [0, 1, 1];
                break;
            default:
                fibonacciSeq = [0, 1, 1];
                for (let index = 2; index < n; index++) {
                    fibonacciSeq.push(
                        fibonacciSeq[fibonacciSeq.length - 1] +
                            fibonacciSeq[fibonacciSeq.length - 2],
                    );
                }
                break;
        }

        if (n === 0) {
            whichNumberIs = `${
                fibonacciSeq[fibonacciSeq.length - 1]
            } é o zerézimo dígito da sequência de Fibonacci`;
        } else {
            whichNumberIs = `O ${n}º dígito da sequência de Fibonacci é ${
                fibonacciSeq[fibonacciSeq.length - 1]
            }`;
        }
        setFibArr(fibonacciSeq);
        setFeedBackStr(whichNumberIs);
        return whichNumberIs;
    };

    return (
        <>
            <Main>
                <h1>Fibonacci Finder</h1>
                <label htmlFor="">
                    Qual posição de Fibonacci você deseja ?
                </label>
                <input
                    type="number"
                    min={0}
                    onChange={FibCalc}
                    placeholder="Ex: 5 = quinta posição"
                />
                <Result>{FeedBackStr}</Result>
                <p>
                    Pelas diferenças entre convenções, para este cálculo, o zero
                    foi considerado o "zerézimo" termo.
                </p>
            </Main>
        </>
    );
}

export default FibonacciCalculator;
