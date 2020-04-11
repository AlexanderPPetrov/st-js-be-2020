import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";

const resolvers = [User, Game];

export default mergeResolvers(resolvers);