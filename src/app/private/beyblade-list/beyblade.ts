export interface Beyblade {
    key: string;
    name: string;
    line?: string;
    owned: boolean;
    type?: string;
    blade?: string;
    ratchet?: string;
    bit?: string;
    image?: string;
}

export interface BeybladeDetail {
    key: string;
    name: string;
    line: string;
    owned: boolean;
    type: string;
    lockChip: string;
    blade: string;
    assist?: string;
    ratchet: string;
    bit: string;
    image: string;
}
