using NUnit.Framework;
using primes_api;
using System.Collections.Generic;
using System;
using System.Linq;

namespace primes_api.tests
{
    public class Tests
    {

        private readonly Dictionary<int, bool> _numberIsPrime = new Dictionary<int, bool>()
        {
            [0] = false,
            [1] = false,
            [2] = true,
            [3] = true,
            [4] = false,
            [5] = true,
            [6] = false,
            [7] = true,
            [8] = false,
            [9] = false,
            [10] = false,
            [11] = true,
            [12] = false,
            [13] = true,
            [14] = false,
            [15] = false,
            [16] = false,
            [17] = true,
            [18] = false,
            [19] = true,
            [20] = false
        };
        private PrimeNumberService _primeNumberService;

        private List<int> getPrimesLessThanInput(int upperBound)
        {
            if (upperBound > 20 || upperBound < 0)
            {
                throw new ArgumentException();
            }
            var primes = new List<int>();
            for (var i = 0; i <= upperBound; i++)
            {
                if (_numberIsPrime[i])
                {
                    primes.Add(i);
                }
            }
            return primes;
        }


        private void testAreInputPrimesAllPrimesLessThanInputUpperBound(List<int> primeCandidates, int upperBound)
        {
            var actualPrimes = this.getPrimesLessThanInput(upperBound);
            Assert.IsTrue(actualPrimes.SequenceEqual(primeCandidates));
        }

        [SetUp]
        public void Setup()
        {
            this._primeNumberService = new PrimeNumberService();
        }

        [Test]
        public void GetPrimeNumbers_InputIs1_ShouldBeEmpty()
        {
            var primeCandidates = this._primeNumberService.GetPrimeNumbers(1);
            Assert.IsEmpty(primeCandidates);
        }

        [Test]
        public void GetPrimeNumbers_TestFirst20InputValuesGiveCorrectPrimes()
        {
            for (var i = 0; i <= 17; i++)
            {
                var primeCandidates = this._primeNumberService.GetPrimeNumbers(i);

                this.testAreInputPrimesAllPrimesLessThanInputUpperBound(primeCandidates, i);
            }
        }

    }
}