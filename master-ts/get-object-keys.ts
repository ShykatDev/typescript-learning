const frameworks = {
    vitest: {
        lable: "Vitest",
    },
    jest: {
        lable: "Jest",
    },
    mocha: {
        lable: "Mocha",
    }
};

type FrameworksKeys = typeof frameworks;
type Frameworks = keyof FrameworksKeys;