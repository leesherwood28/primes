using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace primes_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrimeNumberController : ControllerBase
    {
        private readonly IPrimeNumberService primeNumberService;
        public PrimeNumberController(IPrimeNumberService primeNumberService)
        {
            this.primeNumberService = primeNumberService;
        }

        [HttpGet]
        public IEnumerable<int> getPrimeNumbers(int maxNumber)
        {
            return this.primeNumberService.GetPrimeNumbers(maxNumber);
        }
    }
}
