import gql from 'graphql-tag';

export const fetchSongs =  gql`
    {
        songs {
            id
            title
        }
    }
`;

export const deleteSong = gql`
    mutation DeleteSong($id : ID){
        deleteSong(id : $id){
            id
        }
    }
`;

export const SongQuery = gql`
    query SongQuery($id : ID! ){
        song(id : $id){
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`;


export const AddLyricToSong = gql`
    mutation AddLyricToSong($songId : ID!, $content : String!){
        addLyricToSong(content : $content , songId : $songId){
            id
            lyrics {
                id
                content
                likes
            }
        }
    }

`;


export const LikeLyric = gql`
    mutation LikeLyric($id : ID){
        likeLyric(id : $id){
            id
            likes
        }
    }
`;
