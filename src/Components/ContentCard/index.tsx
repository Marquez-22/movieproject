import { Card } from "../Card"


type ContentCardType = "ContentCard1"
interface ContentCardProps {
    type?: ContentCardType
   
}

export const ContentCard = ({type = "ContentCard1" }: ContentCardProps) => {
    return (<>
        <div className={`ContentCard ${type}`}>
            <Card
                img='/images/peli1.webp'
                text='John Wick: Chapter 4'
                number={7.9}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
               
            />
            <Card
                img='/images/peli2.jpg'
                text='Puss in Boots: The Last Wish'
                number={6.7}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli3.jpg'
                text='The Last of Us'
                number={9.4}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli4.webp'
                text='The Super Mario Bros. Movie'
                number={8.8}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli5.png'
                text='The Goon: 2'
                number={3.7}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli6.png'
                text='The Meg:  2'
                number={2.8}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli7.png'
                text='Momias Adventure'
                number={7.5}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli8.jpg'
                text='The Old Way'
                number={10}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli1.webp'
                text='John Wick: Chapter 4'
                number={5.5}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli2.jpg'
                text='Puss in Boots: The Last Wish'
                number={2.9}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli3.jpg'
                text='The Last of Us'
                number={7.0}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli4.webp'
                text='The Super Mario Bros. Movie'
                number={4.1}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli5.png'
                text='The Goon: 2'
                number={5.6}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli6.png'
                text='The Meg: 2'
                number={8.9}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli7.png'
                text='Momias Adventure'
                number={9.9}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />
            <Card
                img='/images/peli8.jpg'
                text='The Old Way'
                number={7.9}
                titulodescription="Overview"
                textdescription="With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
            />

        </div>
    </>)
}