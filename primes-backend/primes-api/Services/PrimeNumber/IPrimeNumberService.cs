using System;
using System.Linq;
using System.Collections.Generic;

namespace primes_api
{
    public interface IPrimeNumberService
    {
        public List<int> GetPrimeNumbers(int maxNumber);
    }
}
