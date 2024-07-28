
describe('Tipe Data Primitif', () => {

    it('should return Tipe Data Primitif', () => {

        const nama:string = 'Audyari Wiyono';
        const Tabungan:number = 1000000;
        const isVip:boolean = true;

        expect(typeof 'Audyari Wiyono').toBe('string');
        expect(typeof 1000000).toBe('number');
        expect(typeof true).toBe('boolean');

        console.log(`Nama: ${nama}`);
        console.log(`Tabungan: ${Tabungan}`);
        console.log(`VIP: ${isVip}`);
        
    });


});