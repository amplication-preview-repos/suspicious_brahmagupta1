/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PredictionWhereUniqueInput } from "../../prediction/base/PredictionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PredictionCreateNestedManyWithoutModelsInput {
  @Field(() => [PredictionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PredictionWhereUniqueInput],
  })
  connect?: Array<PredictionWhereUniqueInput>;
}

export { PredictionCreateNestedManyWithoutModelsInput as PredictionCreateNestedManyWithoutModelsInput };
