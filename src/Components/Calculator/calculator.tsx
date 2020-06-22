import { Main, Result } from './calculator_styles';
import React, { useMemo, useState } from 'react';

function FibonacciCalculator() {
    const [FeedBackStr, setFeedBackStr] = useState<string>();
    const [inputNumber, setInputNumber] = useState<number>(0);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(Number(e.target.value));
    };

    useMemo(() => {
        let fibonacciSeq: number[];
        let whichNumberIs: string;

        let n: number = inputNumber;

        if (n > 100000) {
            alert(
                'Para evitar problemas de estabilidade o cálculo só é feito até a 100000ª posição',
            );
        } else {
            switch (n) {
                case 0:
                    fibonacciSeq = [0];

                    break;
                case 1:
                    fibonacciSeq = [0, 1];
                    fibonacciSeq.splice(0, 1);
                    break;
                case 2:
                    fibonacciSeq = [0, 1, 1];
                    fibonacciSeq.splice(0, 1);
                    break;
                default:
                    fibonacciSeq = [0, 1, 1];
                    for (let index = 2; index < n; index++) {
                        let f1: any = BigInt(
                            fibonacciSeq[fibonacciSeq.length - 1],
                        );
                        let f2: any = BigInt(
                            fibonacciSeq[fibonacciSeq.length - 2],
                        );

                        fibonacciSeq.push(f1 + f2);
                        fibonacciSeq.splice(0, 1);
                    }
                    break;
            }

            if (n === 0) {
                whichNumberIs = `${
                    fibonacciSeq[fibonacciSeq.length - 1]
                } é o zerézimo dígito da sequência de Fibonacci`;
            } else {
                whichNumberIs = `O ${n}º dígito da sequência de Fibonacci é ${BigInt(
                    fibonacciSeq[fibonacciSeq.length - 1],
                )}`;
            }

            setFeedBackStr(whichNumberIs);
            return whichNumberIs;
        }
    }, [inputNumber]);

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
                    max={100000}
                    onChange={handleInput}
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
