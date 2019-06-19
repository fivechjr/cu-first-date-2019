import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavigationBar from '../components/common/navigation-bar'
import View from '../components/common/view'
import SectionTitle from '../components/common/section-title'
import Separator from '../components/common/separator'
import ChulaEngineeringIcon from '../components/common/chula-engineering-icon'

const PerClubView = ({ pageContext }) => {
    const getColor = () => {
        switch (pageContext.type.toUpperCase()) {
            case 'ACADEMIC':
                return 'blue'
            case 'SPORT':
                return 'orange'
            default:
                return 'gray'
        }
    }

    const mainColor = getColor()

    return (
        <Layout>
            <SEO title="Home" />
            <NavigationBar />
            <section className="bg-white">
                <View className="py-20 border-b border-gray-200">
                    <SectionTitle
                        en={pageContext.type.toUpperCase()}
                        th={pageContext.name}
                        icon={<ChulaEngineeringIcon />}
                        color={mainColor}
                    />
                    <p className="font-headline text-lg leading-loose text-gray-700">
                        {pageContext.description}
                    </p>
                    <Separator color={mainColor} />
                </View>
            </section>
        </Layout>
    )
}

export default PerClubView
