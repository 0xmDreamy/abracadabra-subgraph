import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';

export const CAULDRON_ENTITY_TYPE = 'Cauldron';
export const PROTOCOL_ENTITY_TYPE = 'Protocol';
export const COLLATERAL_ENTITY_TYPE = 'Collateral';
export const PROTOCOL_DAILY_SNAPSHOT = 'ProtocolDailySnapshot';
export const PROTOCOL_HOURY_SNAPSHOT = 'ProtocolHourySnapshot';
export const CAULDRON_DAILY_SNAPSHOT = 'CauldronDailySnapshot';
export const CAULDRON_HOURY_SNAPSHOT = 'CauldronHourySnapshot';

export const MOCK_ACCOUNT = Address.fromString('0x33C52FBAB377F2C9F85DD6E678AE6BAF78A20EBE');

// Mock LogDeploy params
export const NON_CAULDRON_V1_MASTER_CONTRACT_ADDRESS = Address.fromString('0x476b1E35DDE474cB9Aa1f6B85c9Cc589BFa85c1F');
export const CAULDRON_V1_MASTER_CONTRACT_ADDRESS = Address.fromString('0x469a991a6bB8cbBfEe42E7aB846eDEef1bc0B3d3');
export const NON_CAULDRON_V1_DATA = Bytes.fromHexString(
    '0x000000000000000000000000090185f2135308bad17527004364ebcc2d37e5f600000000000000000000000075e14253de6a5c2af12d5f1a1ea0a2e11e69ec1000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000009719bf7000000000000000000000000000000000000000000000000000000000001adb0000000000000000000000000000000000000000000000000000000000001388000000000000000000000000000000000000000000000000000000000000001f400000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000',
);
export const CAULDRON_V1_DATA = Bytes.fromHexString(
    '0x0000000000000000000000007da96a3891add058ada2e826306d812c638d87a70000000000000000000000006cc0cd7d25e291029b55c767b9a2d1d9a18ae6680000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e7d1eab13ad0104d2750b8863b489d65364e32d000000000000000000000000000000000001ed09bead87c0378d8e64000000000000000000000000000000007da96a3891add058ada2e826306d812c638d87a7',
);
export const CLONE_ADDRESS = Address.fromString('0xCfc571f3203756319c231d3Bc643Cee807E74636');
export const SPELL_ORACLE_ADDRESS = Address.fromString('0x75e14253de6a5c2af12d5f1a1ea0a2e11e69ec10');
export const SPELL_ORACLE_DATA = Bytes.fromHexString('0x00');
export const SPELL_ORACLE_PRICE = BigInt.fromString('2131832523236974503283');

// Mock cauldron params
export const NON_CAULDRON_V1_COLLATERAL_ADDRESS = Address.fromString('0x090185f2135308BaD17527004364eBcC2D37e5F6');
export const CAULDRON_V1_COLLATERAL_ADDRESS = Address.fromString('0x7Da96a3891Add058AdA2E826306D812C638D87a7');

// Mock collateral params
export const COLLATERAL_NAME = 'Spell Token';
export const COLLATERAL_SYMBOL = 'SPELL';
export const COLLATERAL_DECIMALS = 18;

// Mock block params
export const BLOCK_NUMBER = BigInt.fromI32(13492855);
export const BLOCK_TIMESTAMP = BigInt.fromI32(1635249440);

// Mock cook borrow
export const MOCK_COOK_BORROW = Bytes.fromHexString(
    '0x000000000000000000000000000000000000000000000009f98351204fe000000000000000000000000000000df6242b6b88c5ed789f5c8994a80ffc6979eb4b',
);
