import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";

const typeDefs = [User, Game];

export default mergeTypes(typeDefs, {all: true});