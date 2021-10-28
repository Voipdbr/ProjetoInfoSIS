CREATE DATABASE infosis-dates-car;
CREATE  TABLE IF NOT EXISTS `car` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `placa` VARCHAR(7) NOT NULL,
  `chassi` VARCHAR(17) NOT NULL,
  `renavam` VARCHAR(11) NOT NULL,
  `modelo` VARCHAR(255) NOT NULL,
  `marca` VARCHAR(255) NOT NULL,
  `ano` INT(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
INSERT INTO `infosis-dates-car`.`car` (`placa`, `chassi`, `renavam`, `modelo`, `marca`, `ano`) VALUES ('FBN1AH5', '14521452145214521', '14521452145', 'UNO', 'Não sei');