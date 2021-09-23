export const expectRequest = (endpoint: string, expectedEndpoint: string, data?: object, expectedData?: object): void => {
    if (data && expectedData) {
        Object.keys(data).forEach(element => {
            expect(data[element]).toEqual(expectedData[element]);
        });
    }

    expect(endpoint).toEqual(expectedEndpoint);
};