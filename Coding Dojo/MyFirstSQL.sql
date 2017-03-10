SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `authors` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `authors` ;

-- -----------------------------------------------------
-- Table `authors`.`authors`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `authors`.`authors` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `first_name` VARCHAR(45) NULL ,
  `last_name` VARCHAR(45) NULL ,
  `email` VARCHAR(255) NULL ,
  `created_at` DATETIME NULL ,
  `update_at` DATETIME NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`descriptions`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `authors`.`descriptions` (
  `iddescription` INT NOT NULL AUTO_INCREMENT ,
  `authors_id` INT NOT NULL ,
  `content` VARCHAR(45) NULL ,
  `created_at` DATETIME NULL ,
  `updated_at` DATETIME NULL ,
  PRIMARY KEY (`iddescription`) ,
  INDEX `fk_table2_authors_idx` (`authors_id` ASC) ,
  CONSTRAINT `fk_table2_authors`
    FOREIGN KEY (`authors_id` )
    REFERENCES `authors`.`authors` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`books`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `authors`.`books` (
  `idbooks` INT NOT NULL AUTO_INCREMENT ,
  `authors_id` INT NOT NULL ,
  `title` VARCHAR(45) NULL ,
  `creared_at` DATETIME NULL ,
  `updated_at` DATETIME NULL ,
  `bookscol` VARCHAR(45) NULL ,
  PRIMARY KEY (`idbooks`) ,
  INDEX `fk_books_authors1_idx` (`authors_id` ASC) ,
  CONSTRAINT `fk_books_authors1`
    FOREIGN KEY (`authors_id` )
    REFERENCES `authors`.`authors` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`authors_has_books`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `authors`.`authors_has_books` (
  `authors_id` INT NOT NULL ,
  `books_idbooks` INT NOT NULL ,
  PRIMARY KEY (`authors_id`, `books_idbooks`) ,
  INDEX `fk_authors_has_books_books1_idx` (`books_idbooks` ASC) ,
  INDEX `fk_authors_has_books_authors1_idx` (`authors_id` ASC) ,
  CONSTRAINT `fk_authors_has_books_authors1`
    FOREIGN KEY (`authors_id` )
    REFERENCES `authors`.`authors` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_authors_has_books_books1`
    FOREIGN KEY (`books_idbooks` )
    REFERENCES `authors`.`books` (`idbooks` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `authors` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
