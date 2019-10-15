using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDTestAngular7.Models
{
    public class Aluno
    {
        public int AlunoId { get; set; }

        [Required]
        public string Nome { get; set; }
        public string Email { get; set; }


    }
}
