### Parse UUID. 
32-hexa decimal digits. 

### Validation Pipe. 
When we use UsePip() in a controller it is applied to every method inside that controller. 
When used at individual handler level, it will apply to only that specific method. 
#### The validation pipe will allow us to use validate our own classes using Dto. 
`class-validator class-transformer` required packages. 
#### we can use methods like @IsString() @IsAlphanumeric()

### Validating empty fields. 
@IsEmpty() and @IsNotEmpty()

### Length validator. 
can take min and max as args.
`@Length()` validator, when provided with one arg, it will act as the minimum. 

we can also use
`@MinLength() and @MaxLength()` // we can use separate values from this.

