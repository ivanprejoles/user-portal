export const typeDefs = `
enum MemberRole {
    ADMIN
    MODERATOR
    GUEST
  }
  
  type Profile {
    id: ID!
    userId: String! @unique
    email: String! @unique
    name: String!
  
    createdAt: DateTime!
    updatedAt: DateTime!
  
    servers: [Server!]!
    members: [Member!]!
  }
  
  type Server {
    id: ID!
    name: String!
    imageUrl: String!
    inviteCode: String! @unique
  
    profileId: String! @unique
    profile: Profile!
    members: [Member!]!
    posts: [Post!]!
    images: [Image!]!
  
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Member {
    id: ID!
    role: MemberRole!
    profileId: String!
    profile: Profile!
    serverId: String!
    server: Server!
  
    posts: [Post!]!
  
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Post {
    id: ID!
    name: String!
  
    serverId: String!
    server: Server!
    memberId: String!
    member: Member!
  
    images: [Image!]!
  
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Image {
    id: ID!
    imageUrl: String!
    imageName: String!
  
    profileId: String
    profile: Profile
  
    serverId: String
    server: Server
  
    postId: String
    post: Post
  
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`