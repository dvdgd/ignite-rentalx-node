# DOCUMENTATION

## Car register

**Functional requirements**
It must be possible to register a new car.<br>
It should not be possible to register a car with an existing license plate.<br>
It should not be possible to change the license plate of an existing car.<br>
The car must be registered with availability to be rented.<br>
The user responsible for the registration must be an administrator user.<br>

## Car listing

**Functional requirements**<br>
It should be possible to list all available cars.<br>
It should be possible to list all cars for an admin user.<br>
It should be possible to list all available cars by car name.<br>
It should be possible to list all available cars by category name.<br>
It should be possible to list all available cars by brand name.<br>
It should be possible to list all available cars by spec id.<br>
The user does not need to be logged into the system to list available cars.<br>

## Specification registration on the car

**Functional requirements**<br>
It must be possible to register a specification for a car.<br>
It should not be possible to register a specification for an unregistered car.<br>
It should not be possible to register an existing specification for the same car.<br>

## Car image registration

**Functional requirements**<br>
It must be possible to register the image of the car.<br>
The user responsible for the registration must be an administrator user.<br>

## Alugel de carro

**Functional requirements**<br>
It must be possible to register a rental for a car.<br>
It should not be possible to register a new rental if there is already one open for the same user.<br>
It should not be possible to register a new rental if there is already one open for the same car.<br>
The rental must have a minimum duration of 24 hours.<br>
