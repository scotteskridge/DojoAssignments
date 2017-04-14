using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CommentWall.Models
{
    public class User 
    {
        [Key]
        public int Id;
        [Required]
        [MinLengthAttribute(2, ErrorMessage = "Username too short") ]
        public string first_name {get; set;}
        [Required]
        [MinLengthAttribute(2)]
        public string last_name{get; set;}

        [Required]
        [EmailAddress]
        public string email{get; set;}

        [Required]
        [MinLengthAttribute(8)]
        [DataType(DataType.Password)]
        public string pw {get; set;}

        [Required]
        [Compare("pw", ErrorMessage = "Password and Confirmation must match")]
        public string pw_confirm {get; set;}
        public DateTime CreatedAt{get; set;}
        public DateTime UpdatedAt{get; set;}

        public List<Message> Messages{get; set;}
        public List<Comment> Comment{get; set;}

    }
}