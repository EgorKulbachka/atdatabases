/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 2Kl9EYztdTe6Za8O8LnH5M2QOoPblaRfB0+q/5z2Pl797wNihQ4cvpPSZaF5MVNBvzQbdPTCK+Rz9t3yhYWlOA==
 */

// eslint:disable
// tslint:disable

interface Users {
  age: number | null;
  bio: string | null;
  id: number & {readonly __brand?: 'users_id'};
  screen_name: string;
}
export default Users;

interface Users_InsertParameters {
  age?: number | null;
  bio?: string | null;
  id?: number & {readonly __brand?: 'users_id'};
  screen_name: string;
}
export {Users_InsertParameters};
