import validator from 'validator';

export const passValidator = (value, arrParans) => {
  const val = validator.isStrongPassword(value, {
    minLength: arrParans[0],
    minLowercase: arrParans[1],
    minUppercase: arrParans[2],
    minNumbers: arrParans[3],
    minSymbols: 0,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
  });
  return val;
};
