using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace primes_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PrimeNumberController : ControllerBase
    {
        private readonly IPrimeNumberService primeNumberService;
        public PrimeNumberController(IPrimeNumberService primeNumberService)
        {
            this.primeNumberService = primeNumberService;
        }

        [HttpGet("[action]")]
        public IEnumerable<int> getPrimeNumbers(int upperBound)
        {
            return this.primeNumberService.GetPrimeNumbers(upperBound);
        }
    }
}
