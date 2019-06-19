import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavigationBar from '../components/common/navigation-bar'
import View from '../components/common/view'
import ImageView from '../components/common/image-view'
import SectionTitle from '../components/common/section-title'
import Separator from '../components/common/separator'
import ChulaEngineeringIcon from '../components/common/chula-engineering-icon'
// import GatsbyImage from '../components/common/gatsby-image'

const PerClubView = ({ pageContext }) => {
    const renderImages = () => {
        if (pageContext.images && pageContext.images.length > 0) {
            return pageContext.images.map(i => (
                <img className="w-full" src={i} alt={pageContext.name} />
            ))
        }
    }

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
            <SEO title={pageContext.name} />
            <NavigationBar pageTitle={pageContext.name} />
            <section className="bg-white">
                <View className="py-20">
                    <SectionTitle
                        en={pageContext.type.toUpperCase()}
                        th={pageContext.name}
                        icon={<ChulaEngineeringIcon />}
                        color={mainColor}
                    />
                    <p className="font-headline text-lg leading-loose text-gray-700">
                        {pageContext.description}
                    </p>
                </View>
            </section>
            <section className="bg-gray-100 py-20">
                <ImageView>{renderImages()}</ImageView>
            </section>
        </Layout>
    )
}

export default PerClubView
