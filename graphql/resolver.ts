// import { Context } from "@/pages/api/graphql";

// export const resolvers = {
//     Query: {
//         // get profile by id
//         profile: async (_parent: any, args: any, context: Context) => {
//             return await context.prisma.profile.findUnique({
//                 where: {
//                     id: args.id
//                 }
//             })
//         },
//         // get all server id
//         servers: async (_parent: any, args: any, context: Context) => {
//             return await context.prisma.server.findMany()
//         },
//         // get server by id
//         server: async (_parent: any, args: any, context: Context) => {
//             return await context.prisma.server.findFirst({
//                 where: {
//                     profileId: args.profileId
//                 }
//             })
//         },
//     }
// }