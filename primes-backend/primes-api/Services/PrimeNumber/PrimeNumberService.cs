using System;
using System.Linq;
using System.Collections.Generic;

namespace primes_api
{
    public class PrimeNumberService : IPrimeNumberService
    {
        public List<int> GetPrimeNumbers(int maxNumber)
        {
            var primes = new List<int>();
            for (int i = 2; i <= maxNumber; i++)
            {
                if (NumberIsPrime(i, primes))
                {
                    primes.Add(i);
                }
            }

            return primes;
        }

        private bool NumberIsPrime(int checkNumber, List<int> primesLessThanNumber)
        {
            return !primesLessThanNumber.Any(i => (checkNumber % i) == 0);
        }

    }
}
